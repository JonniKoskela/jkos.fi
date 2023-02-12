import { React } from "react";
import CollapseCard from "../Components/CollapseCard";
import CollapseCardWithInner from "../Components/CollapseCardWithInner";
import "./MainPage.css/";

function MainPage() {
      const collapsetext1 = (
            <text>
                  Tämä sivu sisältää paljon keskeneräistä materiaalia ja on tehty pelkästään frontend-harjoittelun ja huvin vuoksi.
                  Tarkoituksenani on laittaa lähdekoodi saataville, kunhan sivu valmistuu hiljalleen.
            </text>
      );
      const collapsetext2 = (
            <text>
                  <br />
            </text>
      );

      return (
            <>
                  <div id="MainCard">
                        <CollapseCardWithInner
                              ButtonText="Tämä sivu projektina"
                              CollapseText={collapsetext1}
                        />
                        <CollapseCard
                              ButtonText=""
                              CollapseText={collapsetext2}
                        />
                        <CollapseCard ButtonText="" CollapseText={""} />
                  </div>
            </>
      );
}

export default MainPage;
