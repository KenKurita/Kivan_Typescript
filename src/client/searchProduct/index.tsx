import React, {useEffect, useState} from 'react';
import axios from 'axios';



export const SearchProduct = () => {
  const [fixtureName, setFixtureName] = useState('');
  const [length, setLength] = useState(0);
  const [part, setPart] = useState([]);
  const [selectedPart, setSelectedPart] = useState([]);
  const [searchTermValue, setSearchTermValue] = useState('');
  return (
    <div>
      yeet
    </div>
  )
}

const el = <SearchProduct/>