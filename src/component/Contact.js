import React from 'react'

function Contact() {
    return (
        <div>
            <h4 className='hh'>Feel Free to Contact Us</h4>

            <div className="constiner-fluid map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57302.595081422696!2d85.86197825518434!3d26.150702136724977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb835434acdb1%3A0x70ec31d04822699e!2sDarbhanga%2C%20Bihar!5e0!3m2!1sen!2sin!4v1691614834767!5m2!1sen!2sin"  style={{border:"0"}} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div className="mainContant">
                <div>
                    <input className='link' placeholder='YOUR NAME'></input>
                </div>
                
                <div>
                    <input className='link' placeholder='YOUR EMAIL'></input>
                </div>
                <div className="buu">
                    <button className='btn btn-danger'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
