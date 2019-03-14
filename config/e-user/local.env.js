// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

// See config/environment for this 3 parameters
//DeviseSite : "Eco-système Logiciels Libres ",
//TitreSite  : "Libre Communaute",

module.exports = {
  DOMAIN: 'https://groupes.mim.ovh',
  SESSION_SECRET: 'mY-Ssecret-is-Hello!',

  DEBUG: '',
  TitreSite: 'E-USERS',
  DeviseSite: ' You are welcomme !',

 Infos: "<center> Environnement Collaboratif <br>Services en ligne</center>",
 mail: {
    user: 'administrateur@mondomaine.fr',
    sender: 'administrateur@mondomaine.fr',
    password: 'PassWord!',
    host: 'smtp.domaine.fr',
    ssl: true,
    site: 'https://www.domain.fr',
    url: 'https://www.domain.fr/api/users/validate/'
  },

 Structures:[
    {id:"Education", value:"Education"},
    {id:"Ecologie", value:"Ecologie"},
    {id:"Affaires Etrangères", value:"Affaires Etrangères"},
    {id:"Intérieur", value:"Intérieur"},
    {id:"Affaires Sociales", value:"Affaires Sociales"},
    {id:"Finance", value:"Finance"},
    {id:"Justice", value:"Justice"},
    {id:"Collectivité", value:"Collectivité"},
    {id:"Agriculture", value:"Agriculture"},
    {id:"Culture", value:"Culture"},
    {id:"Dinsic", value:"Dinsic"},
    {id:"Autre", value:"Autre"}
  ],
 ModCard:true,
 onlineServices: [
   {glyphicon: 'glyphicon-bullhorn', url: 'http://discourse.mim.ovh',
   logo: 'https://raw.githubusercontent.com/discourse/discourse/master/public/images/d-logo-sketch.png',
    name: '', title: ' Forum',description:' Débattre librement.', target: '_blank'},

   {glyphicon: 'glyphicon-comment', url: 'https://chat.mim.ovh',
   logo:'https://rocket.chat/images/default/logo--dark.svg', title: 'Chat',description:'Discuter en direct ', target: '_blank'},

   {glyphicon: 'glyphicon-cloud', url: 'https://cloud.mim.ovh',
    logo:'https://www.c-rieger.de/wp-content/uploads/2017/10/cropped-nextcloud-logo-white-transparent-1.png',
    name:'NextCloud', title:'Info Nuagiques', description:'Partager ses documents.',
    target:'_blank'},

   {glyphicon: 'glyphicon-certificate', url: 'https://filepizza.mim.ovh',
    logo:'https://raw.githubusercontent.com/luceole/filepizza/master/static/images/wordmark.png',
    title: 'Transfert pair a pair', description:'Echanger vos gros fichiers',  target: '_blank'},

   {glyphicon: 'glyphicon-fire', url: 'https://cryptpad.mim.ovh/', title: 'Outils collaboratifs',description:'Travailler en toute sécurité',
   logo:'https://cryptpad.fr/customize/CryptPad_logo_color.svg?ver=2.8.0-3' , target: '_blank'},


   {glyphicon: 'glyphicon-blackboard',logo:'https://framalibre.org/sites/default/files/leslogos/logo%20scrumblr.png',
   name:' ',url: 'https://board.mim.ovh/commun', title: 'Tableau de Post It', target: '_blank'},

   {glyphicon: 'glyphicon-stats', logo:'https://about.draw.io/wp-content/uploads/2017/07/drawio_logo_50px.png',
    url: 'https://draw.mim.ovh?lang=fr', title: 'Diagrammes', description:'Dessiner en ligne', target: '_blank'},

   {glyphicon: 'glyphicon-star', logo:'https://upload.wikimedia.org/wikipedia/commons/1/18/GitLab_Logo.svg', name:'GitLab',
    url: 'https://gitlab.mim.ovh', title: 'Forge logiciels', description:'Déposer votre code source', target: '_blank'},

   {glyphicon: 'glyphicon-pencil', url: 'https://pad.mim.ovh/', logo:'https://opensharing.fr/wp-content/uploads/2017/04/etherpad-logo-1.png', title: 'Pad Public' , target: '_blank'},
   {glyphicon: 'glyphicon-star', url: 'https://taiga.mim.ovh', logo:'https://blog.taiga.io/theme/images/logo-color.png', name:'Taiga', title: 'Gestion de projet', target: '_blank'},
//   {glyphicon: 'glyphicon-user', url: 'https://groupes.mim.ovh/settings', title: ' Profil&Groupes'},

   {glyphicon: 'glyphicon-user', url: 'https://sso.mim.ovh/auth/realms/mim/account', logo:'https://www.keycloak.org/resources/images/keycloak_logo_480x108.png' ,
   title: 'OpenID Profil', description:'Consulter vos infos de connexion ',target: '_blank'},
   {glyphicon: 'glyphicon-globe', url:'https://mastodon.etalab.gouv.fr',
   logo:'https://blog.joinmastodon.org/brand.svg' , name: '',  title:'Reseau Social ', description:'mastodon.etalab.gouv.fr ', target: '_blank'},
  ],


  discourse_sso: {
    secret: '123NousIronsAuBois;',
    url: 'http://discourse.domain.fr/session/sso_login?'
  },
  OauthActif: true,
  ForceSSO: true,
  openid: {
    discover: 'https://sso.mim.ovh/auth/realms/mim/',
    // issuer: {
    //   issuer: 'https://cas.libre-communaute.fr/auth/realms/sso/',
    // //   authorization_endpoint: `${process.env.OPENID_ISSUER}/auth`,
    // //   token_endpoint: `${process.env.OPENID_ISSUER}/token`,
    // //   userinfo_endpoint: `${process.env.OPENID_ISSUER}/userinfo`,
    // //   jwks_uri: `${process.env.OPENID_ISSUER}/certs`,
    // //   end_session_endpoint: `${process.env.OPENID_ISSUER}/logout`
    // },
   nonce: 'MyRandomString 132654',
   client: {
      client_id: 'grp',
      client_secret: '',
      redirect_uris: ['https://www.mondomain.fr/auth/openid/callback']
    }
  },

  board:{
    url: 'https://board.mondomain.fr'
  },
 visio:{
    url: 'https://jitsi.mondomain.fr'
  },

  ethercalc: {
    key: 'mysecret',
    url: 'https://calc.mondomain.fr'
  },
   etherpad: {
     apikey: '',
     host: 'pad.mim.ovh',
     port:443,
     url: 'https://pad.mondomain.fr'
   }


};
