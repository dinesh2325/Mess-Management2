import express from "express";
import {
  createNewPollController,
  createPollcontroller,
  deletePollcontroller,
  resolveComplainController,
  submitPollcontroller,
  userComplainController,
  viewComplainController,
  viewPollcontroller,
} from "./../controllers/generalController.js";
import {
  ApproveMenuReq,
  Deletereq,
  menureqsend,
  viewMenuRequests,
} from "../controllers/generalController.js";

const router = express.Router();

//for registring complain
router.post("/complain", userComplainController);
//for viewing complain
router.get("/viewcomplain", viewComplainController);
// for resolve complain
router.put("/resolvecomplain/:id", resolveComplainController);
//for sending menureq to warden
router.post("/menureqsend", menureqsend);
//for view mess menu req
router.get("/viewmessreq", viewMenuRequests);
//for delete approved menu req
router.delete("/deletereq", Deletereq);
//approve menu req
router.put("/approvemenureq", ApproveMenuReq);

//create new poll
router.post("/createnewpoll", createNewPollController);
//create poll
router.put("/createpoll/:pollId", createPollcontroller);
router.get("/getPoll", viewPollcontroller);
router.post("/submitpoll", submitPollcontroller);
router.delete("/deletepoll/:pollId", deletePollcontroller);
export default router;
