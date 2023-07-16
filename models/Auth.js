import mongoose from "mongoose";//<--呢個就係導入(拉巴V)唔知咩庫（就係模組）

const AuthSchema = new mongoose.Schema({ //跟本就係obj {'key': 'value' }, 所以寫mongodb Schema 要用obj方式寫
    //都證明左mongodb 入面是obj 
    //<-- 呢到係指 mongoose.Schema 呢個obj 要完全復制出黎用
    // 要用new 而new 係可以用係class到 所以證明左mongoose.Schema係個class,
    //而用 AuthSchema 黎代表佢呢個class
    username:{
        type: String,
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number,
        min:8
    },
    address:{
        type:String,
    },
    password:{
        type:String,
        min:6
    },
    isAdmin:{
        type:Boolean
    },
    S1:{},S2:{},S3:{},S4:{},S5:{},S6:{}, //<--因為個網站之後可能會有擴展，呢D就係空白既schema
},{timestamps:true})//《-- 呢個係用mongodb內生產建立時間

const Auth = mongoose.model('Auth',AuthSchema); // 《-- 用Auth來載住 入面既動作 authschema入面既入內容會放入mongodb 而個collection既名係叫Auth （係mongodb 顯示係collection名係Auths) 

export default Auth //<--呢個係用黎導出模組，因為現在你是寫模組
