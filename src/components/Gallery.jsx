import 'photoswipe/style.css';
import PeelingImage from "./images/Peeling";
import SubcisionImage from "./images/Subcision";
import PRPHairImage from "./images/PRPHair";
import { Gallery, Item } from "react-photoswipe-gallery";
function MyGallery() {
  return (
    <Gallery id="gallery">
      <h2 className="text-center">Peeling</h2>
      <div className="container-fluid text-center">
        <div className="row ">
          <div className="col-md-4 ">
            <Item
              original={PeelingImage.Beforeimage1}
              thumbnail={PeelingImage.Beforeimage1thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PeelBeforeIMG1"
                  ref={ref}
                  onClick={open}
                  src={PeelingImage.Beforeimage1thumb}
                />
              )}
            </Item>
            <Item
              original={PeelingImage.Afterimage1}
              thumbnail={PeelingImage.Afterimage1thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PeelAfterIMG1"
                  ref={ref}
                  onClick={open}
                  src={PeelingImage.Afterimage1thumb}
                />
              )}
            </Item>
          </div>
          <div className="col-md-4 ">
            <Item
              original={PeelingImage.Beforeimage2}
              thumbnail={PeelingImage.Beforeimage2thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PeelBeforeIMG2"
                  ref={ref}
                  onClick={open}
                  src={PeelingImage.Beforeimage2thumb}
                />
              )}
            </Item>

            <Item
              original={PeelingImage.Afterimage2}
              thumbnail={PeelingImage.Afterimage2thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PeelAfterIMG2"
                  ref={ref}
                  onClick={open}
                  src={PeelingImage.Afterimage2thumb}
                />
              )}
            </Item>
          </div>
          <div className="col-md-4">
            <Item
              original={PeelingImage.Beforeimage3}
              thumbnail={PeelingImage.Beforeimage3thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PeelBeforeIMG3"
                  ref={ref}
                  onClick={open}
                  src={PeelingImage.Beforeimage3thumb}
                />
              )}
            </Item>
            <Item
              original={PeelingImage.Afterimage3}
              thumbnail={PeelingImage.Afterimage3thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PeelAfterIMG3"
                  ref={ref}
                  onClick={open}
                  src={PeelingImage.Afterimage3thumb}
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <hr />
      <h2 className="text-center">Subcision</h2>
      <div className="container-fluid text-center">
        <div className="row ">
          <div className="col-md-12 ">
            <Item
              original={SubcisionImage.Beforeimage1}
              thumbnail={SubcisionImage.Beforeimage1thumb}
              width="3102"
              height="1974"
            >
              {({ ref, open }) => (
                <img
                  alt="SubBeforeIMG1"
                  ref={ref}
                  onClick={open}
                  src={SubcisionImage.Beforeimage1thumb}
                />
              )}
            </Item>
            <Item
              original={SubcisionImage.Afterimage1}
              thumbnail={SubcisionImage.Afterimage1thumb}
              width="3060"
              height="2094"
            >
              {({ ref, open }) => (
                <img
                  alt="SubAfterIMG1"
                  ref={ref}
                  onClick={open}
                  src={SubcisionImage.Afterimage1thumb}
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <hr />
      <h2 className="text-center">PRP for Hair Growth</h2>
      <div className="container-fluid text-center">
        <div className="row ">
          <div className="col-md-12 ">
            <Item
              original={PRPHairImage.Beforeimage1}
              thumbnail={PRPHairImage.Beforeimage1thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PRPBeforeIMG1"
                  ref={ref}
                  onClick={open}
                  src={PRPHairImage.Beforeimage1thumb}
                />
              )}
            </Item>
            <Item
              original={PRPHairImage.Afterimage1}
              thumbnail={PRPHairImage.Afterimage1thumb}
              width="564"
              height="705"
            >
              {({ ref, open }) => (
                <img
                  alt="PRPAfterIMG1"
                  ref={ref}
                  onClick={open}
                  src={PRPHairImage.Afterimage1thumb}
                />
              )}
            </Item>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid ">
        <h2 className="text-center">PRP Hair Treatment for Hair Loss</h2>
        <div className="row ">
          <div className="col-md-12 ">
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  width: "75%",
                  height: "75%",
                  left: "10%",
                }}
                src={"https://www.youtube.com/embed/7wpAXz4MrmM"}
                title="PRP Hair"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="row ">
          <h2 className="text-center">IPL Laser for Hair Removal</h2>
          <div className="col-md-12 ">
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                height: 0,
                left: "10%",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  width: "75%",
                  height: "75%",
                }}
                src={"https://www.youtube.com/embed/CoqL3btLQZ0"}
                title="Hair Removal"
              />
            </div>
          </div>
        </div>
      </div>
    </Gallery>
  );
}
export default MyGallery;
