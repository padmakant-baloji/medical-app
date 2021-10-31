import { Breadcrumbs, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import css from "./Breadcrumb.module.scss";
const Breadcrumb = ({ data }) => {
  return (
    <div className={css.breadcrumb}>
      <Breadcrumbs aria-label="breadcrumb">
        {data?.list.map((x, i) => (
          <Link
            key={i}
            color="inherit"
            to={x.path}
            // onClick={handleClick}
          >
            {x.label}
          </Link>
        ))}
        <Typography color="textPrimary">{data.current}</Typography>
      </Breadcrumbs>
    </div>
  );
};
export default Breadcrumb;
