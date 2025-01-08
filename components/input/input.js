"use client";

import { useState,useEffect } from "react";
import styles from "./input.module.css"

export default function Input(){
    const [image, setImage] = useState(null);
    const [input,setInput] = useState('');
    const [loading,setLoading] = useState(false);
    const [selectValue, setSelectValue] = useState(null);
    async function handleClick(){
        setLoading(true);
        setImage(null);
        const respone = await fetch('/api/getImage', {
        method: 'POST',
        body: JSON.stringify({input: input, style: selectValue}),
    });
      const newUrl = await respone.json();
      setInput('');
      setImage(newUrl);
      setLoading(false);
    }
    function handleChange(event){
        setInput(event.target.value);
    }
    function handleSelectChange(event){
        setSelectValue(event.target.value);
    }
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter' && !loading) {
                handleClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [input, selectValue]); // Dependency array to ensure the event listener updates based on input/select changes

    return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.input}>
        <input onChange={handleChange} type="text" placeholder="Input Text For AI To Generate Image" value={input} />
        <select onChange={handleSelectChange}>
        <option value="Style">Style</option>
        <option value="Retro">Retro</option>
        <option value="Realistic">Realistic</option>
        <option value="Sketch">Sketch</option>
        <option value="Oil Painting">Oil Painting</option>
        <option value="Cartoon">Cartoon</option>
        
        </select>
        <button onClick={handleClick} disabled={loading}>Generate</button>
        </div>
        {image ? (
  <img className={styles.image} src={image} />
) : (
  <div className={styles.image}>
    {loading ? (
      <div className={styles.loader}></div>
    ) : (
        <img
        src="/logo.png"
        alt="Placeholder Image"
        style={{ width: "125px",height: "125px",borderRadius: "0px" }}
      />
    )}
  </div>
)}

    </div>
    </div>
    )
}