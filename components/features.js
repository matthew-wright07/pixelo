export default function Feature() {
    return (
        <div style={{ backgroundColor: '#222831'}}>
            <div className="container pb-3">
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-0 p-1">
            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundColor: '#222831', backgroundSize: "cover", backgroundImage: 'url(space.png)',border:"none" }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">How Far Can We Go?</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <img src="./logo.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                            </li>
                            <li className="d-flex align-items-center me-3">
                                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                <small>Earth</small>
                            </li>
                            <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                <small>3d</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundColor: '#222831',backgroundSize:"cover", backgroundImage: 'url(/art.png)',border:"none" }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">What Can We Make?</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <img src="./logo.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                            </li>
                            <li className="d-flex align-items-center me-3">
                                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                <small>Pakistan</small>
                            </li>
                            <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                <small>4d</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 " style={{ backgroundColor: '#222831',backgroundSize:"cover", backgroundImage: 'url(unicorn.png)',border:"none" }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold" >What Will We Dream?</h3>
                        <ul className="d-flex list-unstyled mt-auto">
                            <li className="me-auto">
                                <img src="./logo.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                            </li>
                            <li className="d-flex align-items-center me-3">
                                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill" /></svg>
                                <small>California</small>
                            </li>
                            <li className="d-flex align-items-center">
                                <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#calendar3" /></svg>
                                <small>5d</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
