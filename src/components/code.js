import React from "react"
import Section from "./section"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { IoMdArrowRoundUp } from 'react-icons/io';

class Code extends Section {
    render() {
      return (
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            }}
        >
      <p id="code"></p>
      <p>CODE TEST Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus ornare. Magna sit amet purus gravida quis blandit turpis cursus in. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ultrices tincidunt arcu non sodales neque sodales ut. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Eros donec ac odio tempor orci dapibus. Mauris ultrices eros in cursus turpis massa tincidunt dui. Sem viverra aliquet eget sit amet tellus cras. Tortor aliquam nulla facilisi cras fermentum odio eu. Mauris a diam maecenas sed enim. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.
      Sed pulvinar proin gravida hendrerit. Venenatis cras sed felis eget velit aliquet sagittis id. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Dignissim diam quis enim lobortis scelerisque fermentum dui. Netus et malesuada fames ac turpis egestas integer eget aliquet. Placerat duis ultricies lacus sed turpis tincidunt id. Posuere morbi leo urna molestie at elementum. A condimentum vitae sapien pellentesque habitant morbi tristique. Nisi est sit amet facilisis magna etiam tempor orci. Ornare suspendisse sed nisi lacus sed viverra tellus. Et malesuada fames ac turpis egestas. Sociis natoque penatibus et magnis dis parturient montes. Nullam eget felis eget nunc. Tempus iaculis urna id volutpat lacus laoreet non. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Ante metus dictum at tempor commodo ullamcorper a. Nec ultrices dui sapien eget. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Vehicula ipsum a arcu cursus vitae congue. Non curabitur gravida arcu ac tortor dignissim convallis aenean et.
      Amet volutpat consequat mauris nunc congue nisi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Arcu odio ut sem nulla pharetra. Lectus proin nibh nisl condimentum id. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Faucibus interdum posuere lorem ipsum dolor. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Id cursus metus aliquam eleifend mi. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Non odio euismod lacinia at quis. Bibendum arcu vitae elementum curabitur. Venenatis lectus magna fringilla urna porttitor rhoncus. At volutpat diam ut venenatis tellus in. Fringilla urna porttitor rhoncus dolor purus non enim praesent.
      Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. In vitae turpis massa sed elementum tempus egestas sed. Nec tincidunt praesent semper feugiat nibh. Etiam sit amet nisl purus in mollis. Et tortor consequat id porta. Quam pellentesque nec nam aliquam sem. Ut lectus arcu bibendum at varius vel pharetra. Viverra orci sagittis eu volutpat odio facilisis mauris. Quis imperdiet massa tincidunt nunc. Morbi tristique senectus et netus. Consequat nisl vel pretium lectus quam id leo in. Nibh cras pulvinar mattis nunc sed blandit libero. Sapien pellentesque habitant morbi tristique senectus et. Sem et tortor consequat id porta nibh venenatis. Aenean sed adipiscing diam donec. Eget est lorem ipsum dolor sit amet consectetur. Eget magna fermentum iaculis eu non diam phasellus vestibulum.
      Felis bibendum ut tristique et egestas quis ipsum suspendisse. Pellentesque eu tincidunt tortor aliquam nulla. Hac habitasse platea dictumst quisque sagittis. Cursus turpis massa tincidunt dui ut. Vitae et leo duis ut diam. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sed blandit libero volutpat sed cras. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Ac placerat vestibulum lectus mauris ultrices eros in. Eleifend quam adipiscing vitae proin. Eget mi proin sed libero enim sed faucibus turpis. Ac turpis egestas integer eget aliquet nibh praesent. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Ut porttitor leo a diam. Sodales neque sodales ut etiam sit amet nisl purus in. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Et netus et malesuada fames ac turpis egestas sed tempus.
      </p>
      <button class="btn btn-outline-primary scrollup-btn" onClick={() => scrollTo('#top')}><IoMdArrowRoundUp /></button>
        </div>
      )
    }
  }

  export default Code