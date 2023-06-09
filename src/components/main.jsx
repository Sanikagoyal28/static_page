import React from 'react'
import image1 from "../Assets/image1.svg"
import image2 from "../Assets/image2.png"
import image3 from "../Assets/image3.png"
import image4 from "../Assets/image4.png"
import service from "../Assets/service.svg"
import team from "../Assets/team.svg"
import blog from "../Assets/blog.svg"
import logo from "../Assets/logo.svg"
import insta from "../Assets/insta.svg"
import fb from "../Assets/fb.svg"
import tiktok from "../Assets/tiktok.svg"
import ytube from "../Assets/youtube.svg"
import snap from "../Assets/snap.svg"
import tick from "../Assets/tick.svg"
import end_logo from "../Assets/end_logo_1.svg"
import "./styles.scss"
import Testimonial from './testimonial'
import Book from './book'

export default function Main() {
    return <>
        <div>
            <nav className='navbar'>
                <img src={logo} className='logo' />
                <div className='navflex1'>
                    <div className='navFlex' >
                        <img src={service} />
                        <p>Services</p>
                    </div>
                    <div className='navFlex'>
                        <img src={team} />
                        <p>Team</p>
                    </div>
                    <div className='navFlex'>
                        <img src={blog} />
                        <p>Blog</p>
                    </div>
                </div>
            </nav>

            <div className='section1' style={{ backgroundImage: `url(${image1})` }}>
                <p className='mainText'>Unleash the Power of Compelling Content</p>
                <p className='purpleText'>We produce tailored content for brands and professionals.</p>
            </div>
            <Book />

            <div className='section2'>
                <p className='heading'><span>Why Choose Stellar?</span></p>
                <p className='text2'>
                    Most businesses struggle to consistently create captivating content that engages their audience.<br /><br />
                    They find it challenging to stand out amidst the noise and competition.<br /><br />
                    But now, imagine having access to an endless stream of compelling content that not only captivates your audience but also builds strong connections and drives real results.<br /><br />
                </p>
            </div>

            <div className='section3'>
                <p>Connect emotionally with your audience</p>
                <div className='image'>
                    <img src={image2} />
                </div>
                <p className='text3'>SPARK EMOTIONS</p><br />
                <p className='text3'>ENCOURAGE SHARING</p><br />
                <p className='text3'>INTRIGUING CONTENT</p><br />
                <p >Engaging interactive elements that foster community and conversation</p>
            </div>

            <div className='section4'>
                <p>Streamline your Content Creation Process</p>
                <div className='image'>
                    <img src={image3} />
                </div>
                <p>Dedicated team of experienced content creators.</p><br />
                <p>Customized Content for Reels, Explainers, Scoops, Soaps, and Comedy.</p><br />
                <p>Keep Customers on the edge, craving for more.</p><br />
            </div>

            <div className='section3'>
                <p>Evoke Strong Emotions and Create Experience</p>
                <div className='image'>
                    <img src={image4} />
                </div>
                <p className='text3'>Stunning Visuals that create an emotional impact</p><br />
                <p >Emotional storytelling that resonates with your audience's desires and aspirations.</p><br />
                <p>Personalized content that connects on a deeper, emotional level.</p>
            </div>

            <div className='section5'>
                <p className='heading'><span>Testimonials</span></p>
                <Testimonial text="'Thanks to Stellar CCC, our social media engagement skyrocketed. Their unique content creation approach truly brought our brand to life, and our audience couldn't get enough!' - Sarah, Fashion Influencer."
                    border="#663399" bg="white" />
                <Testimonial text="'The interactive content created by Stellar CCC helped us build a strong community around our brand. It fostered meaningful conversations and boosted our brand loyalty.' - Mike, Fitness Trainer." border="#76777a" bg="#66339933" />
                <Testimonial text="'Stellar CCC's personalized storytelling transformed our brand's image. The emotional connection their content created with our audience resulted in increased sales and brand recognition.' - Emily, E-commerce Entrepreneur." border="#663399" bg="white" />
            </div>

            <Book />

            <div className='section6'>
                <p className='heading'><span>Grow your brand on</span></p>
                <div className='flex6'>
                    <img src={ytube} id="yt" />
                    <img src={fb} id="fb" />
                    <img src={tiktok} id="tt" />
                    <img src={insta} id="insta" />
                    <img src={snap} id="sc" />
                </div>
            </div>

            <div className='section6'>
                <p className='heading'><span>Our Clients</span></p>
                <div className='flexLogo'>
                    <img src={end_logo}/>
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                    <img src={end_logo} />
                </div>
            </div>

            <div className='section8'>
                <p className='heading'><span>Our Features</span></p>
                <ul>
                    <li><img src={tick} />
                        Reels, Posts, Videos, Posters,
                        Ads, if you can imagine it, we
                        can produce it.
                    </li>
                    <li><img src={tick} />
                        Soaps, Drama’s, Comedy,
                        Challenges, Pranks, Fun and
                        style, content that moves.
                    </li>
                    <li><img src={tick} />
                        Pre-Scheduled Content,
                        Quick Content, News Style
                        Edits, Long-Form as well as
                        short form.
                    </li>
                    <li><img src={tick} />
                        Keep your customers on the
                        edge of their seat, waiting
                        and eager for more.
                    </li>
                    <li><img src={tick} />
                        We work for appealing to
                        both the human brain as well
                        as the social algorithms, oh
                        and Ai also.
                    </li>
                    <li><img src={tick} />
                        The future is going to be fun,
                        so get geared up and ready
                        for it with our various content
                        strategies.
                    </li>
                    <li><img src={tick} />
                        Awareness, Consideration,
                        Conversion, Let our content
                        push your customers through
                        the sales funnel.
                    </li>
                    <li><img src={tick} />
                        Leave your competition in the
                        dust, capture customer
                        attention, capture the market.
                    </li>
                </ul>
            </div>
            <Book />
            <footer>
                <p>SITEMAP | PRIVACY POLICY | TERMS OF SERVICE</p>
                <p className='call'><a href={`tel${97477757916}`}>Call: +974 777 57 916</a></p>
                <img src={logo} />
            </footer>
        </div>
    </>
}


