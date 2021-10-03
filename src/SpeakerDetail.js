import React from "react";
import ImageToggleOnScroll from "./ImageToggleOnScroll";

const SpeakerDetail = ({
    id,
    firstName,
    lastName,
    favorite,
    bio,
    onHeartFavorriteHandler
}) => {
    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll
                className="card-img-top"
                primaryImg={`/stgatic/speakers/bw/Speaker-${id}.jpg`}
                secondaryImg={`/stgatic/speakers/Speaker-${id}.jpg`}
                alt={`${firstName} ${lastName}`} />

            <div className="card-body">
                <h4 className="card-title">
                    <button data-sessionid={id}
                        className={favorite ? 'heartredButton' : 'heartdarkbutton'}
                        onClick={(e) => {
                            onHeartFavorriteHandler(e, !favorite);
                        }}
                    />
                    <span>
                        {firstName} {lastName}
                    </span>
                </h4>
                <span>{bio}</span>
            </div>
        </div>

    );
}

export default SpeakerDetail;