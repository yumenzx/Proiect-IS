import React, { Component } from 'react';
import pic from './companies.png';

export class About extends Component {
    render() {
        return (
            <div class="backgroundStyle">
                <h3><br></br>Welcome to About section</h3>
                <div class="row">
                    <div class="column">
                        <p>
                            We are an airline company that provides air transport services for traveling passengers
                            and freight. We use aircraft to supply these services and may form partnerships or alliances
                            with other airlines for codeshare agreements, in which we both offer and operate the same
                            flight. Here are some of our alliances with which we cooperate: American Airlines, Delta,
                            United, Southwest, China Southern Airlines, Ryanair, etc.
                        </p>
                        <p>
                            Our airline ticket company is one of the most serious companies with many satisfied customers
                            following our services. With a coverage of over 15 countries, we guarantee that your experience
                            it will not be a disappointment.
                        </p>
                        <p>
                            For more informations about us, or if you want to get some informations for a specific route,
                            you can contact us in several methods available on our contact section.
                        </p>
                    </div>
                </div>
                <img src={pic} alt="companies_picture" width="auto" height="800"/>
            </div>
        )
    }
}