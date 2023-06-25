import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Contact = () => {
    const refForm = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_6p2njn6',
            'template_tguusq8',
            refForm.current,
            'alK4lBd-wRD4cW2dN',
        )
        .then(
            ()=> {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try agian')
            }
        )
    }

    return (

        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>I am interested in software engineering positions. If you think I may be a fit please do not 
                    hesitate to reach out!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                            <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input type="text" placeholder="Subject" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name="message" required />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Markan Katinic,
                <br />
                1747 Peters Road North Vancouver, <br />
                BC, Canada <br />
                <span>mwkatinic@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[49.341485019467015, -123.0262084171664]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[49.341485019467015, -123.0262084171664]}>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Contact;