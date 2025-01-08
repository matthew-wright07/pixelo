import OpenAI from "openai";
const openai = new OpenAI();

export async function POST(req){
  const editable = await req.json();
  const promtValue = editable.input;
  const style = editable.style;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `make ${promtValue} and make the style ${style}`,
      n: 1,
      size: "1024x1024",
    });
    
    console.log(response.data[0].url);
    return new Response(JSON.stringify(response.data[0].url));
}
