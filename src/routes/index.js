import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListings";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListings";
import { updateListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";
import { addViewToListingRoute } from "./addViewToListing";
export default [
  getAllListingsRoute,
  getListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updateListingRoute,
  deleteListingRoute,
  addViewToListingRoute,
];
