import './footer.scss'

function Footer() {
    return (
        <div className='Footer'>
            <div className="contact" id='contact'>
                <h1>Let's talk</h1>
                {/* <br /> */}
                <p>Want to get in touch? <br />Email me at <a href="mailto:shawngrant333@gmail.com">shawngrant333@gmail.com</a></p>
            </div>

            <div className="footer">
                <p>Designed with 🤍 by yours truly</p>
            </div>
        </div>
    )
}

export default Footer