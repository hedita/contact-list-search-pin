import React, { useState } from "react";
import Contacts from "./ContactListData,";

function SearchInput() {
  const [foundContacts, setFoundContacts] = useState(Contacts);

  Contacts.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

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

  return (
    <>
      <input
        type="search"
        onChange={filter}
        className="contact-input"
        placeholder="Contacts"
      />

      {foundContacts.length > 0 ? (
        foundContacts.map(({ id, name, email }) => (
          <div key={id} className="contact">
            <p className="contact-name">{name}</p>
            <p className="contact-email">{email}</p>
            <i className="fa-solid fa-thumbtack pin-icon"></i>
          </div>
        ))
      ) : (
        <h1>NOT FOUND!</h1>
      )}
    </>
  );
}

export default SearchInput;