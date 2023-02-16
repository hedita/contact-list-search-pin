import React, { useEffect, useState } from "react";
import Contacts from "./ContactListData,";

function SearchInput() {
  const [contact, setContact] = useState("");
  return (
    <>
    <input className="contact-input" placeholder="Contacts"/>
     {Contacts.map(({ id, name, email, isPined }) => {
    return (
      <div className="contact" key={id}>
        <p className="contact-name">{name}</p>
        <p className="contact-email">{email}</p>
      </div>
    );
  })
}
    </>
  )
}

export default SearchInput;