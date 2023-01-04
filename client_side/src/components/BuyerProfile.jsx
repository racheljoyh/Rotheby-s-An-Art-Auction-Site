import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function BuyerProfile({currentBuyer, setCurrentBuyer}) {
    const{first_name, id} = currentBuyer
    let history = useHistory();
    const [buyerName, setBuyerName] = useState(first_name);

    function handleNewSubmitName(e) {
        e.preventDefault();

        fetch(`http://localhost:9292/buyers/${currentBuyer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: buyerName,
            }),
        })
            .then((res) => res.json())
            .then(setCurrentBuyer);

        // handleShowForm();
    }

    function handleDeleteUser() {
        fetch(`http://localhost:9292/buyers/${currentBuyer.id}`, {
            method: "DELETE",
        });
        alert("Your profile was deleted!");
        setCurrentBuyer([]);
        history.push("/")
    }


    return (
        <div>
            <div>
                <form onSubmit={handleNewSubmitName}>
                    <input
                        className="input"
                        type="text"
                        value={buyerName}
                        onChange={(e) => setBuyerName(e.target.value)}
                    ></input>
                    <button type= "submit" className="glow-on-hover">
                    Edit
                </button>
                </form>
            </div>
            <div>
                <button className="userButtons" onClick={handleDeleteUser}>
                    Delete Your Profile
                </button>
            </div>
        </div>
    );
}

export default BuyerProfile;