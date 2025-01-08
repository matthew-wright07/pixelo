export default function Pricing() {
    return (
        <div className="py-4" style={{ backgroundColor: "#222831 ",height:"75vh" }}>
            <div className="container py-3">
                <div className="row row-cols-1 row-cols-md-1 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm" style={{ backgroundColor: "#393E46" }}>
                            <div className="card-header py-3" style={{ backgroundColor: "#7109F5", color: "#EEEEEE" }}>
                                <h4 className="my-0 fw-normal">Free</h4>
                            </div>
                            <div className="card-body" style={{ color: "#EEEEEE" }}>
                                <h1 className="card-title pricing-card-title">
                                    $0
                                </h1>
                                <h3>(We Like To Keep Things Simple)</h3>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Unlimited Free Images</li>
                                    <li>Free Support</li>
                                    <li>Advanced Styles</li>
                                </ul>
                            
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
