import React from "react";
import { Grid } from "semantic-ui-react";
import "./Home.scss";
import Feed from "../../components/Home/Feed";
import FeedTablet from "../../components/Home/FeedTablet";
import FeedMovil from "../../components/Home/FeedMovil";

import UsersNotFolloweds from "../../components/Home/UsersNotFolloweds";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMovil = useMediaQuery({ query: "(max-width: 600px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 601px) and (max-width: 1099px)",
  });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1100px)",
  });

  return (
    <>
      {isDesktopOrLaptop && (
        <Grid className="home">
          <Grid.Column className="home__left" width={10}>
            <Feed />
          </Grid.Column>

          <Grid.Column className="home__right" width={6}>
            <UsersNotFolloweds />
          </Grid.Column>
        </Grid>
      )}

      {isTablet && (
        <Grid className="home">
          <Grid.Column className="home__left" width={11}>
            <FeedTablet />
          </Grid.Column>

          <Grid.Column className="home__right" width={5}>
            <UsersNotFolloweds />
          </Grid.Column>
        </Grid>
      )}

      {isMovil && (
        <Grid className="home-movil">
          <Grid.Row className="home-movil_top">
            <UsersNotFolloweds />
          </Grid.Row>
          <Grid.Row>
            <FeedMovil />
          </Grid.Row>
        </Grid>
      )}
    </>
  );
}
