import React from 'react'

function Hero() {
  return (
    <section className='container-fluid' id="supportHero">
      <div className='p-5 ' id="supportWrapper">
        <h4>Support Portal</h4>
        <a href=''>Track tickets</a>
      </div>

      <div className='row p-5 m-3'>
        <div className='col-6 p-5 '>
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder='Eg: how do i activate F&O,why is my order getting rejected' /><br/>
          <a href=''>Track account opening</a>&nbsp;&nbsp;&nbsp;
          <a href=''>Track segment activation</a>&nbsp;&nbsp;&nbsp;
          <a href=''>Intraday margins</a> <br/>
          <a href=''>Kite user manual</a>
        </div>
        <div className='col-6 p-5'>
          <h1 className='fs-3'>Featured</h1>
          <ol className='orderlist'>
            <li><a href=''>Rights Entitlements listing in July 2024</a></li>
            <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;