import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Ellen</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
          laoreet non curabitur gravida arcu ac tortor dignissim convallis.
          Lectus mauris ultrices eros in cursus turpis massa tincidunt dui.
          Ornare arcu odio ut sem nulla pharetra diam sit. Volutpat diam ut
          venenatis tellus in metus. Ut ornare lectus sit amet est placerat in.
          Ipsum consequat nisl vel pretium. Tincidunt ornare massa eget egestas
          purus viverra. Est ultricies integer quis auctor elit sed vulputate
          mi. Lorem sed risus ultricies tristique. Elit pellentesque habitant
          morbi tristique senectus. Sed nisi lacus sed viverra tellus in hac.
          Morbi tincidunt ornare massa eget egestas. Elit ut aliquam purus sit
          amet. Tempor orci dapibus ultrices in. <br></br>
          <br></br>
          Vitae tortor condimentum lacinia quis vel eros donec. Consequat
          interdum varius sit amet mattis vulputate enim. Faucibus in ornare
          quam viverra. Tortor at auctor urna nunc id cursus metus aliquam
          eleifend. Vitae suscipit tellus mauris a diam maecenas sed.
          Consectetur adipiscing elit pellentesque habitant morbi tristique.
          Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin.
          Enim facilisis gravida neque convallis a cras semper. Morbi enim nunc
          faucibus a pellentesque sit amet porttitor eget. Risus viverra
          adipiscing at in tellus integer feugiat scelerisque. Posuere ac ut
          consequat semper viverra. Eget lorem dolor sed viverra ipsum.
        </p>
      </div>
      <div className="menu">m</div>
    </div>
  );
};

export default Single;
