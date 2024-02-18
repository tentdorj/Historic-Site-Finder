import { useEffect, useState } from "react";
import NavBar from "../homepage/NavBar";
import MyMap from "./MyMap";
import SiteCard from "./SiteCard";
import api from "../api";
import Spinner from "../Spinner";

export default function Dash() {
  const [sites, setSites] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getAllSites() {
    try {
      const res = await api.getSites();
      setSites(res);
      console.log(res);
      setLoading(false);
    } catch (error) {
      alert(error);
      setSites([]);
    }
  }
  useEffect(() => {
    getAllSites();
  }, []);

  return (
    <>
      <NavBar />{" "}
      {loading ? (
        <Spinner />
      ) : (
        <div className="d-flex min-vh-100 min-vw-100">
          <div className="row text-center w-100">
            <div className="col-4  bg-primary">
              {sites.length > 0 &&
                sites.map((site, index) => (
                  <SiteCard
                    // key={index}
                    name={site.sitename}
                    purpose={site.site_typology}
                    neighborhood={site.site_community}
                  />
                ))}
            </div>
            <div className="col p-0  mx-auto bg-primary">
              <MyMap />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
