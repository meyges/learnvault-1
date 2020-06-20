import React from 'react';

const LikeButton = ({ id, loggedInUser }) => {
  function likeButtonClick(eventId, userId) {
    const payload = { id: userId, collectionId: id };

    fetch(`/api/collections/like/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <button label="likebutton" onClick={() => likeButtonClick(id, loggedInUser)} type="button" className="like-button">
      <i className="far fa-thumbs-up" />
    &nbsp; Like Collection
    </button>
  );
};

export default LikeButton;