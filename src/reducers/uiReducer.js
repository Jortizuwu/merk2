import { types } from "../types/types";
// { id: 2, url: "https://picsum.photos/300/420.jpg" }

const initialState = {
  pinesHomes: [
    {
      id: 1,
      url: "https://i.imgur.com/JN6XBW9.jpg2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nobis molestiae. Maiores molestiae necessitatibus quisquam consequuntur autem accusantium cum, at, veniam mollitia non perspiciatis maxime adipisci fugiat, quis sint?",
      state: "usado",
      change: true,
      ubicacion: "Monteria",
      price: "30.000",
      moreImg: [
        "https://picsum.photos/430/320.jpg",
        "https://picsum.photos/420/320.jpg",
        "https://picsum.photos/410/320.jpg",
      ],
      title: "Rk-61",
    },
    {
      id: 2,
      url: "https://i.imgur.com/G2cGTcs.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nobis molestiae. Maiores molestiae necessitatibus quisquam consequuntur autem accusantium cum, at, veniam mollitia non perspiciatis maxime adipisci fugiat, quis sint?",
      state: "usado",
      change: false,
      ubicacion: "Monteria",
      price: "120.000",
      moreImg: [
        "https://picsum.photos/461/320.jpg",
        "https://picsum.photos/440/320.jpg",
        "https://picsum.photos/450/320.jpg",
      ],

      title: "Anime Stikers",
    },
    {
      id: 3,
      url: "https://i.imgur.com/e8lr79o.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nobis molestiae. Maiores molestiae necessitatibus quisquam consequuntur autem accusantium cum, at, veniam mollitia non perspiciatis maxime adipisci fugiat, quis sint?",
      state: "usado",
      change: false,
      ubicacion: "Monteria",
      price: "302.000",
      moreImg: [
        "https://picsum.photos/412/320.jpg",
        "https://picsum.photos/441/320.jpg",
        "https://picsum.photos/436/320.jpg",
      ],

      title: "Logitch G203",
    },
    {
      id: 4,
      url: "https://i.imgur.com/TOoYoZj.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nobis molestiae. Maiores molestiae necessitatibus quisquam consequuntur autem accusantium cum, at, veniam mollitia non perspiciatis maxime adipisci fugiat, quis sint?",
      state: "usado",
      change: true,
      ubicacion: "Monteria",
      price: "510.000",
      moreImg: [
        "https://picsum.photos/480/320.jpg",
        "https://picsum.photos/402/320.jpg",
        "https://picsum.photos/405/320.jpg",
      ],

      title: "Nintendo 3ds",
    },
    {
      id: 5,
      url: "https://i.imgur.com/FecyDbS.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nobis molestiae. Maiores molestiae necessitatibus quisquam consequuntur autem accusantium cum, at, veniam mollitia non perspiciatis maxime adipisci fugiat, quis sint?",
      state: "usado",
      change: false,
      ubicacion: "Monteria",
      price: "10.000",
      moreImg: [
        "https://picsum.photos/409/320.jpg",
        "https://picsum.photos/416/320.jpg",
        "https://picsum.photos/423/320.jpg",
      ],

      title: "PS4 mando",
    },
    {
      id: 6,
      url: "https://i.imgur.com/cDUg5QM.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem omnis nobis molestiae. Maiores molestiae necessitatibus quisquam consequuntur autem accusantium cum, at, veniam mollitia non perspiciatis maxime adipisci fugiat, quis sint?",
      state: "usado",
      change: true,
      ubicacion: "Monteria",
      price: "10.000",
      moreImg: [
        "https://picsum.photos/430/320.jpg",
        "https://picsum.photos/412/320.jpg",
        "https://picsum.photos/421/320.jpg",
      ],

      title: "PS4 Juegos",
    },
  ],
  saveList: [],
  viewMoreOption: false,
  modalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.more:
      return {
        ...state,
        viewMoreOption: !state.viewMoreOption,
      };
    case types.modalEven:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case types.addSave:
      return {
        ...state,
        saveList: [...state.saveList, action.payload],
      };
    case types.delteSave:
      return {
        ...state,
        saveList: state.saveList.filter((va) => va._id !== action.payload),
      };
    case types.deleteMain:
      return {
        ...state,
        pinesHomes: state.pinesHomes.filter((va) => va.id !== action.payload),
      };
    case types.addNewImage:
      return {
        ...state,
        pinesHomes: [...state.pinesHomes, action.payload],
      };
    default:
      return state;
  }
};
