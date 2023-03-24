import CategoryList from "../../components/category-list/category-list";

const Home = () => {
  
    const categories = [
      {
        id: 1,
        title: "Hat",
        img: "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        id: 2,
        title: "Jackets",
        img: "https://i.ibb.co/px2tCc3/jackets.png"
      }, 
      {
        id: 3,
        title: "Sneakers",
        img: "https://i.ibb.co/0jqHpnp/sneakers.png"
      }, 
      {
        id: 4,
        title: "Womens",
        img: "https://i.ibb.co/GCCdy8t/womens.png"
      }, 
      {
        id: 5,
        title: "Mens",
        img: "https://i.ibb.co/R70vBrQ/men.png"
      }];
      
      return (
        <CategoryList categories = {categories} />
      )
  };
  
  
  export default Home;
  