import React, { useEffect, useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import SpeakerData from "./SpeakerData";
import SpeakerDetail from './SpeakerDetail'

const Speakers = ({ }) => {



    const [speakersList, setSpeakersLIst] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 1000);
        }).then(() => {
            setIsLoading(false);
        });
        setSpeakersLIst(SpeakerData);
        return () => {
            console.log('clenaup');
        }
    }, []);

    const heartFavoriteHandler = (e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
        setSpeakersLIst(
            speakersList.map((item) => {
                if (item.id === sessionId) {
                    return { ...item, favorite: favoriteValue };
                }
                return item;
            }),
        );
    };

    if (isLoading) return <div>Loading...</div>;



    return (
        <div>
            <Header />
            <Menu />
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {speakersList.map(
                            ({ id, firstName, lastName, bio, favorite }) => {
                                return (
                                    <SpeakerDetail
                                        key={id}
                                        id={id}
                                        favorite={favorite}
                                        firstName={firstName}
                                        lastName={lastName}
                                        bio={bio}
                                        onHeartFavoriteHandler={heartFavoriteHandler} />

                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speakers;