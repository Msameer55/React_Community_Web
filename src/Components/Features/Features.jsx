import React from 'react'
import "./Features.css"
import Same from '../Same/Same'

const Features = () => {
    return (
        <>
            <div className="features-section" id='features-section'>
                <div className="container">
                    <div className="flex">
                        <p className='heading'>Empowering Features for Seamless Engagement</p>
                        <p className='para'>Discover a host of cutting-edge features at NurtureNexus designed to enhance your engagement and make your journey with us truly exceptional. From intuitive networking tools that help you connect with like-minded individuals effortlessly to interactive workshops that foster  learning.</p>
                    </div>

                    <div className="images-section">
                        <div className="four-col">
                            <div className="image-col"><img src="./Images/Vector1.png" alt="features Images" />
                                <p className='heading'>Community Support:</p>
                                <p className='para'>Our community thrives on boundless collaboration, symbolized by the cloud and guided by focused direction.</p>
                            </div> <div className="image-col"><img src="./Images/Vector.png" alt="features Images" />
                                <p className='heading'>Discussion Forums:</p>
                                <p className='para'>vibrant discussion forums where you can share insights, seek advice, and explore thought-provoking topics.</p>
                            </div> <div className="image-col"><img src="./Images/Icon.png" alt="features Images" />
                                <p className='heading'>Mentorship Program</p>
                                <p className='para'>Connect with experienced mentors who provide guidance, share knowledge, and offer valuable perspectives on your journey.</p>
                            </div> <div className="image-col"><img src="./Images/Icon-1.png" alt="features Images" />
                                <p className='heading'>Global Events:</p>
                                <p className='para'>Meaningful dialogues shape our community, fostering understanding and connections.</p>

                            </div>
                        </div>
                        <div className="four-col">
                            <div className="image-col"><img src="./Images/Icon-2.png" alt="features Images" />

                                <p className='heading'>Resource Library:</p>
                                <p className='para'>Access a curated collection of resources, from guides to templates, that equip you with the tools you need for success.</p>
                            </div> <div className="image-col"><img src="./Images/Icon-3.png" alt="features Images" />
                                <p className='heading'>Collaborative Projects:</p>
                                <p className='para'>Join hands with like-minded individuals in collaborative projects that harness the power of collective creativity.</p>
                            </div> <div className="image-col"><img src="./Images/Icon-4.png" alt="features Images" />
                                <p className='heading'>Networking Hub</p>
                                <p className='para'>Connect with professionals, creatives, and enthusiasts from diverse fields to expand your circle and unlock new opportunities.</p>
                            </div> <div className="image-col"><img src="./Images/Icon-5.png" alt="features Images" />
                                <p className='heading'>Interactive Workshops</p>
                                <p className='para'>Engage in dynamic workshops led by industry experts, designed to enhance your skills and foster continuous learning.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="features-section-2">
                <Same tagline="Synergy"
                    heading="Transformative Tools for Dynamic Engagement"
                    para="Embark on a journey of exploration with NurtureNexus's exceptional features, designed to ignite your potential and foster meaningful connections within our vibrant community. Delve into the world of NurtureNexus with these standout features that empower your journey and amplify your connections. Our meticulously crafted features are designed to seamlessly integrate with your aspirations and needs, creating a dynamic platform that fosters collaboration, growth, and shared success. Whether you're seeking to expand your professional network, engage in transformative learning experiences, or access a wealth of resources that empower you to achieve your goals. Navigate through interactive workshops led by industry experts, form global connections that transcend boundaries. With NurtureNexus, the possibilities are limitless, and the journey is extraordinary."
                    imgSrc1="./Images/feature-section-1.png"
                    imgSrc2="./Images/feature-section-2.png"
                />
            </div>


            <div className="features-section-3">
                <div className="container">
                <div className="features-cards">
                    <div className="flex-container">
                    <div className="feature-card">
                        <p className="feature-heading">Interactive Workshops</p>
                        <p className="feature-para">Engage in hands-on workshops led by industry leaders, designed to enhance your skills and foster continuous learning.</p>
                    </div>
                    <div className="feature-card">
                        <p className="feature-heading">Global Connections</p>
                        <p className="feature-para">Connect with professionals from around the world, broaden your network, and access diverse perspectives and opportunities.</p>
                    </div>
                    <div className="feature-card">
                        <p className="feature-heading">Resource Library</p>
                        <p className="feature-para">Access a curated collection of resources, guides, and templates to equip you with the tools you need for success.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default Features
