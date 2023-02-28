import "./App.css";
import { MdAddShoppingCart } from "react-icons/md";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <main>
        <h1>Buttons</h1>

        <div className="btn_default_box">
          <Button value="Default" />
        </div>

        <div className="btn_outline_box">
          <Button variant="outline" value="Default" />
        </div>

        <div className="btn_text_box">
          <Button variant="text" value="Default" />
        </div>

        <div className="btn_disableShadow_box">
          <Button disableShadow="disableShadow" value="Default" />
        </div>

        <div className="btn_disable_box">
          <Button disabled={true} value="Disabled" />

          <Button variant="text" disabled={true} value="Disabled" />
        </div>

        <div className="btn_icon_box">
          <Button startIcon={<MdAddShoppingCart />} value="Default" />
          <Button endIcon={<MdAddShoppingCart />} value="Default" />
        </div>

        <div className="btn_size_box">
          <Button size="sm" value="Default" />
          <Button size="md" value="Default" />
          <Button size="lg" value="Default" />
        </div>

        <div className="btn_color_box">
          <Button color="default" value="Default" />
          <Button color="primary" value="Default" />
          <Button color="secondary" value="Secondary" />
          <Button color="danger" value="Danger" />
        </div>
      </main>

      <footer>
        <p>
          Created by <span>Daniel Ezekiel</span> -{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </>
  );
};

export default App;
