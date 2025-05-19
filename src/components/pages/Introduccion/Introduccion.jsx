import './Introduccion.css'
export function Introduccion(){
    return(
        <>

            <section className="container">

                <div className="row">
                    <h1 className="display-1-center">Laura Mosquera&copy;</h1>
                    <div className="col-12 col-md-7">
                            
                        <img src="../../../../src/assets/img/Programadora.jpeg" alt="" className="img-fluid rounded"/>
                    </div>
                    <div className="col-12 col-md-5">
                    
                        <p>
                        I am a Software Development student based in Medellín, with strong knowledge in programming logic, SQL database design and management, and front-end development using HTML, CSS, JavaScript, and React. I also have training in Java and experience working with agile methodologies such as Scrum for collaborative software projects. I am characterized by a continuous learning mindset and the ability to adapt quickly to new technological challenges..
                        </p>

                        <div className="row">
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/html-5.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/css-3.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/python.png" alt="" className="img-fluid" />
                                </div>    
                            </div>    
                        </div>

                        <div className="row mt-4">
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/js.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/java.png" alt="" className="img-fluid" />
                                </div>    
                            </div> 
                            <div className="col-4">
                                <div className="card shadow w-100">
                                    <img src="../../../../src/assets/img/science.png" alt="" className="img-fluid" />
                                </div>    
                            </div>    
                        </div>

                        


                    </div>

                </div>

            </section>

        </>
    )
}