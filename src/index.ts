import {Base} from "./base";
import {IPost} from "./app/types";
import {applyMixins} from "./utils";
import {App} from "./app";

interface ITypeicode extends IPost {

}

class Typeicode extends Base {

}

applyMixins(Typeicode, [App])

export default Typeicode