import React from "react";
import Featured from "../../Components/Featured/Featured";
import Slide from "../../Components/Slide/Slide";
import TrustedBy from "../../Components/trustedBy/TrustedBy";
import "./Home.scss";
import { cards } from "../../data";
import CatCard from "../../Components/catCard/CatCard";

const Home = () => {
    return (
        <div className="home">
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={4.5} arrowScroll={4}>
                {
                    cards.map((card) => (<CatCard key={card.id} item={card} />))
                }
            </Slide>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1> A whole world of freelance talent at your fingertips</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates, just project
                            -based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates, just project
                            -based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates, just project
                            -based pricing.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            The best for every budget
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates, just project
                            -based pricing.
                        </p>

                    </div>

                    <div className="item">
                        <iframe width="720" height="380" src="https://www.youtube.com/embed/yW7QVb6oQHM" title="Need a Freelancer? Obviously Fiverr | Fiverr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>
                            liverr <i>business</i>
                        </h1>
                        <h1>
                            A business solution designed for <i>teams</i>
                        </h1>
                        <p>
                            Upgrade to a curated experience packed with tools and benefits,
                            dedicated to businesses
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Connect to freelancers with proven business experience
                        </div>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get matched with the perfect talent by a customer success manager
                        </div>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Manage teamwork and boost productivity with one powerful workspace
                        </div>
                        <button>Explore Liverr Business</button>
                    </div>
                    <div className="item">
                        <img className="bigImg"
                            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map((card) => (
                    <ProjectCard key={card.id} card={card} />
                ))}
            </Slide>
        </div>
    )
}
export default Home;