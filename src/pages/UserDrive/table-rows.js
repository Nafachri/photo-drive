const createData = (photo, name, date, type, size) => {
  return {
    photo,
    name,
    date,
    type,
    size,
  };
};

export const rows = [
  createData(
    "https://akcdn.detik.net.id/community/media/visual/2019/12/18/1e402076-1183-4653-b0e4-8338ff9bcda8_43.jpeg?w=250&q=",
    "Naufal",
    "2022-11-19",
    "JPG",
    20
  ),
  createData(
    "https://cdn.jwplayer.com/v2/media/0KVX9kUR/poster.jpg?width=1920",
    "Krisna",
    "2021-11-19",
    "JPG",
    5
  ),
  createData(
    "https://i.ebayimg.com/images/g/FkQAAOSwevJeQbaa/s-l640.jpg",
    "Marciano",
    "2007-11-19",
    "JPG",
    2
  ),

  createData(
    "//www.html.am/images/samples/remarkables_queenstown_new_zealand-300x225.jpg",
    "Jazman",
    "2009-11-19",
    "JPG",
    1
  ),
  createData(
    "//www.html.am/images/image-codes/milford_sound_t.jpg",
    "Giffy",
    "2012-11-19",
    "JPG",
    16
  ),
  createData(
    "https://source.unsplash.com/user/c_v_r/1900x800",
    "Raihan",
    "2010-11-19",
    "JPG",
    3
  ),
  createData(
    "https://source.unsplash.com/user/c_v_r",
    "Chandra",
    "2020-11-19",
    "JPG",
    7
  ),
  createData("https://picsum.photos/200", "Mardi", "1998-11-19", "JPG", 9),
  createData("https://picsum.photos/200/300", "Maudi", "2000-11-19", "JPG", 11),
  createData(
    "https://source.unsplash.com/user/c_v_r",
    "Nadya",
    "2001-11-19",
    "JPG",
    13
  ),
  createData("https://picsum.photos/100", "Deby", "2022-09-19", "JPG", 15),
  createData("https://picsum.photos/400", "Rosa", "2008-11-19", "JPG", 14),
  createData("https://picsum.photos/1", "Nopzki", "2006-11-19", "JPG", 1),
];
