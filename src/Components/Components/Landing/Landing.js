import React, {Component} from 'react';
import Header from '../Header/Header';
import './Landing.css';
import Footer from '../Footer/Footer';
import SadDog from '../../../sad_dog.jpg';
import SadDog2 from '../../../sad_dog_2.webp';



class Landing extends Component {
    render(){
        return(
            <div>
                <Header />
                <div className='home-page'>
                    <div className='dog-facts'>
                        <img src={SadDog} alt='' className='dog-images'/>
                    </div>
                    <div className='dog-facts'>
                        Only 1 dog out of 10 will find a permanent home.
                        Approximately 3.9 million dogs end up in a shelter every year.
                    </div>
                    {/* <div className='dog-facts'>
                        This app is designed to give you an interest in dogs and finding a dog that is just right for you.
                        To help motivate you to adopt a dog into your home and family.
                    </div> */}
                    <div className='dog-facts'>
                        <img src={SadDog2} alt='' className='dog-images'/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Landing;