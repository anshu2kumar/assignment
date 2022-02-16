import React from 'react'
import{ useState} from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import ReactPaginate from "react-paginate";

const PER_PAGE = 5;
export interface photoProvider {
  id:number;
  thumbnailUrl:string;
  title:string;
}
export interface pageProvider {
  selected:number;
}

const Photo = () => {
  const [photos, setPhotos] = useState<photoProvider[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchPhotos = async () =>{
    const apiResponse = await axios("https://jsonplaceholder.typicode.com/photos");
    setPhotos(apiResponse.data);
  }

  function handlePageClick({ selected:selectedPage}:pageProvider) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = photos
    .slice(offset, offset + PER_PAGE)
    .map(({ thumbnailUrl,title }) => <img src={thumbnailUrl} title={title} alt="testImage"/>);

  const pageCount = Math.ceil(photos.length / PER_PAGE);

  return (<>
    {/*<div>This is our Photo Page. Click the button to get photos</div> */}
    <Button onClick={fetchPhotos} variant="contained" color="primary" className= "Getbutton" >
      Get photos
    </Button>
    <div className="App">
   
    {currentPageData}
    {currentPageData.length>0 ?
    <ReactPaginate
    // previousLabel={"← Previous"}
    // nextLabel={"Next →"}
    pageCount={pageCount}
    onPageChange={handlePageClick}
    containerClassName={"pagination"}
    previousLinkClassName={"pagination__link"}
    nextLinkClassName={"pagination__link"}
    disabledClassName={"pagination__link--disabled"}
    activeClassName={"pagination__link--active"}
  /> :""}
  </div>
    </>
    

  )
}

export default Photo