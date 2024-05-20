/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";

const Header = memo(({ title }) => {
  return <div style={{ padding: "20px" }}>Header = {title}</div>;
});

export default Header;
