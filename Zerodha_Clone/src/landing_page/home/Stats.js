import React from 'react'

function Stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with <br /> ₹4.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push <br />notifications. High quality apps that you use at your <br />pace, the way you like.</p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our <br />investments in 30+ fintech startups offer you tailored <br />services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just <br />facilitate transactions, but actively help you do better <br /> with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media\images\ecosystem.png' style={{ width: "90%" }} />
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{ textDecoration: "none" }}>Explore our products &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{ textDecoration: "none" }}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;