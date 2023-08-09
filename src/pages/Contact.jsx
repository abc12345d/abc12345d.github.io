import "./Contact.css";
import { useNavigate } from "react-router-dom";

const P3 = () => (
  <section id="p3">
    <h1>p3</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales ex et
      eros cursus ultrices. Maecenas suscipit arcu lacus, pulvinar pretium dui
      maximus eu. Ut at mauris nec sapien placerat imperdiet ultrices id sapien.
      Pellentesque hendrerit sollicitudin justo, eu scelerisque diam convallis
      sit amet. Morbi nisi massa, congue ac urna a, pharetra aliquam augue.
      Mauris quis nisl sodales, rhoncus orci non, maximus tellus. Donec euismod
      enim iaculis erat semper suscipit. Mauris interdum rhoncus metus, nec
      scelerisque felis facilisis ut. Proin aliquet ligula vitae arcu egestas
      volutpat. Pellentesque vel feugiat leo, nec vulputate nisl. Duis in
      feugiat ipsum. Etiam at dui at nisi mattis lobortis non a tortor. Nam a
      turpis sapien. Quisque faucibus consectetur sapien, in ullamcorper tellus
      tincidunt id. Aenean consectetur ligula in posuere volutpat. Donec diam
      nisi, dapibus eget viverra sit amet, dictum sit amet dui. Lorem ipsum
      dolor sit amet, consectetur adipiscing elit. Vivamus porttitor sed dui
      quis accumsan. Etiam porttitor arcu est, eget commodo ante ornare eu.
      Suspendisse eu tellus vitae eros interdum ornare et in eros. Praesent sit
      amet dolor vulputate, venenatis elit eget, suscipit orci. Donec semper
      sapien sed bibendum accumsan. Nullam nec odio mauris. Aliquam mollis velit
      ut leo interdum laoreet. Quisque luctus sed lacus a commodo. Cras
      convallis leo metus, sed fermentum diam tincidunt sed. Phasellus in nisl
      molestie, bibendum quam et, iaculis felis. Suspendisse a facilisis nisl, a
      laoreet purus. Quisque at est vel leo consequat efficitur nec vel sem.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper
      purus in pellentesque aliquam. Nam fermentum dictum nulla sed tempus.
      Mauris arcu tellus, semper eget lorem ut, molestie malesuada mauris.
      Aenean et nisl purus. Cras at libero ipsum. Sed pharetra ligula lacus, non
      blandit magna aliquam eget. Cras sit amet sapien ut nisl euismod rhoncus.
      Integer ornare purus non mauris condimentum ultrices. Duis tincidunt at
      dui sit amet congue. Nam pharetra luctus nisi, ultricies sodales quam
      volutpat nec. Sed at magna ipsum. In pulvinar quis enim nec iaculis. Donec
      iaculis tincidunt mollis. Nunc id velit vestibulum, commodo dolor sed,
      interdum sem. Vivamus semper, lorem venenatis semper tincidunt, odio nisi
      sollicitudin sem, eget luctus nunc augue vitae risus. Morbi porta tellus
      sed mi mollis, iaculis lacinia augue laoreet. Nulla est enim, sagittis
      eget metus nec, hendrerit rhoncus dolor. Phasellus venenatis sodales
      lectus, at posuere nisi euismod non. Interdum et malesuada fames ac ante
      ipsum primis in faucibus. Aliquam commodo diam sed ultrices vestibulum.
      Maecenas ut convallis ante. Nulla accumsan, metus vitae condimentum
      laoreet, erat nisl dignissim enim, eget mattis sem sapien et erat. Integer
      sed ante facilisis, euismod lorem et, dapibus lacus. Phasellus consectetur
      sodales lobortis. Phasellus auctor enim lacus, a sodales nulla vestibulum
      non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Pellentesque scelerisque lacus sed tellus porta efficitur.
    </p>
  </section>
);

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <P3 />
    </>
  );
};
export default Contact;
