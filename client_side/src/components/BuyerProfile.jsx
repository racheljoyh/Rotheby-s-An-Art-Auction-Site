import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function BuyerProfile({currentBuyer, setCurrentBuyer}) {
    const{first_name, id} = currentBuyer;
    let history = useHistory();
    const [buyerName, setBuyerName] = useState(first_name);
    const [showForm, setShowForm] = useState(false);

    function handleShowForm() {
        setShowForm((showForm) => !showForm);
    }

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

        handleShowForm();
        alert("Your name has been updated!")
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
            {currentBuyer.length === 0 ? null :
            <div>
            <div className="profileButtons">
                {showForm ? (
                <div>
                    <form onSubmit={handleNewSubmitName}>
                        <input
                            className="input"
                            type="text"
                            value={buyerName}
                            onChange={(e) => setBuyerName(e.target.value)}
                        ></input>
                        <button type= "submit" className="glow-on-hover">
                        Edit Name
                    </button>
                    </form>
                </div> ) : null}
                <button className="userButtons" onClick={handleShowForm}>
                    {showForm ? "Keep My Name" : "Edit Your Name"}
                </button>
            </div>
                <br></br>
            <div>
                <button className="userButtons" onClick={handleDeleteUser}>
                    Delete Your Profile
                </button>
            </div>
            </div>
            }
        </div>
    );
}

export default BuyerProfile;