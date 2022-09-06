import Card from './components/Card'
import { Col, Row } from 'antd';
import { useState } from 'react';
function App() {
  const [data, setData] = useState([{
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    web: "http://anastasia.net",
    img: "https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy"
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    web: "http://anastasia.net",
    img: "https://avatars.dicebear.com/v2/avataaars/Antonette.svg?options[mood][]=happy"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    web: "http://ramiro.info",
    img: "https://avatars.dicebear.com/v2/avataaars/Samantha.svg?options[mood][]=happy"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    web: "http://kale.biz",
    img: "https://avatars.dicebear.com/v2/avataaars/Karianne.svg?options[mood][]=happy"
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    web: "http://demarco.info",
    img: "https://avatars.dicebear.com/v2/avataaars/Kamren.svg?options[mood][]=happy"
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    web: "http://ola.org",
    img: "https://avatars.dicebear.com/v2/avataaars/Leopoldo_Corkery.svg?options[mood][]=happy"
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    web: "http://elvis.io",
    img: "https://avatars.dicebear.com/v2/avataaars/Elwyn.Skiles.svg?options[mood][]=happy"
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    web: "http://jacynthe.com",
    img: "https://avatars.dicebear.com/v2/avataaars/Maxime_Nienow.svg?options[mood][]=happy"
  },
  {
    id: 9,
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    web: "http://conrad.com",
    img: "https://avatars.dicebear.com/v2/avataaars/Delphine.svg?options[mood][]=happy"
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    web: "http://ambrose.net",
    img: "https://avatars.dicebear.com/v2/avataaars/Moriah.Stanton.svg?options[mood][]=happy"
  },
  ])
  const onDeleteHandler = (id) => {
    // console.log(id)
    setData(data.filter((u) => {
      // console.log(u.id == id, id, u.id)
      return u.id !== id
    }))

  }
  const handleOk = (e, i) => {
    const newData = data.map((each) => {
      if (each.id === i) {
        return { id: i, ...e }
      }
      else {
        return each
      }
    }
    )
    setData(newData)
    console.log(newData)
  };
  return (
    <Row gutter={{
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32,
    }} style={{ marginTop: "20px" }}>
      {data.map((each) => (<Col
      >
        <Card key={each.id} data={each} onDelete={onDeleteHandler} handleOk={handleOk} /></Col>))
      }
    </Row >
  );
}

export default App;
