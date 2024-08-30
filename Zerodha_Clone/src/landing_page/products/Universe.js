import React from 'react'

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3">
                    <img src="media\images\smallcaseLogo.png" />
                    <p className='text-small  text-muted'>Thematic investment platform</p>
                </div>

                <div className="col-4 p-3">
                    <img src="media\images\streak-logo.png" style={{width:"37%"}} />
                    <p className='text-small  text-muted'>Algo & strategy platform</p>
                </div>

                <div className="col-4 p-3 mt-4">
                    <img src="media\images\sensibullLogo.svg" style={{width:"37%"}} />
                    <p className='text-small  text-muted'>Options trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media\images\zerodhaFundhouse.png" style={{width:"37%"}}/>
                    <p className='text-small  text-muted'>Asset management</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media\images\tijori.svg" style={{width:"37%"}}/>
                    <p className='text-small  text-muted'>Fundamentals research platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img src="media\images\dittoLogo.png" style={{width:"37%"}} />
                    <p className='text-small  text-muted'>Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5' style={{width:"17%" , margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Universe;