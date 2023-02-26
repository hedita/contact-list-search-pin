import React, { useState } from "react";
import Contacts from "./ContactListData,";

function SearchInput() {
  const [foundContacts, setFoundContacts] = useState(Contacts);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword == "") {
      setFoundContacts(Contacts);
    } else {
      const results = Contacts.filter(({ name, email }) => {
        return (
          name.toLowerCase().startsWith(keyword.toLowerCase()) ||
          email.toLowerCase().startsWith(keyword.toLowerCase())
        );
      });
      setFoundContacts(results);
    }
  };

  function handlePinIcon(id) {
    const updatedContacts = foundContacts.map((contact) => {
      if (contact.id === id) {
        contact.isPinned = !contact.isPinned;
      }
      return contact;
    });
    setFoundContacts(updatedContacts);
  }
  
  const sortedContacts = foundContacts.sort((a,b) => (b.name < a.name ? 1 : -1)).sort((a,b) => b.isPinned - a.isPinned);

  return (
    <>
      <input
        type="search"
        onChange={filter}
        className="contact-input"
        placeholder="Contacts"
      />

      {sortedContacts.length > 0 ? (
        sortedContacts.map(({ id, name, email, isPinned }) => (
          <div
            key={id}
            className="contact"
            style={{ background: isPinned ? "lightgray" : "white" }}
          >
            <p className="contact-name">{name}</p>
            <p className="contact-email">{email}</p>
            <i
              className="fa-solid fa-thumbtack pin-icon"
              onClick={() => handlePinIcon(id)}
            ></i>
          </div>
        ))
      ) : (
        <h1>NOT found!</h1>
      )}
    </>
  );
}

export default SearchInput;
