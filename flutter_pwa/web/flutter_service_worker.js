'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cf7787dcad0f23d5ad945c656feef81a",
"index.html": "53c0255a035acc02225f8274d29b9cc2",
"/": "53c0255a035acc02225f8274d29b9cc2",
"main.dart.js": "2e868071214da585e51b82f72e66c0a8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c4419c9d8eeabf8129125ac961c1a8d5",
"assets/AssetManifest.json": "3a56ef07a99ce5c5f43dbbc0f21366d1",
"assets/NOTICES": "efffd83a99bf3de9e4223daa0e25e65d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f3850c654aca143cbb94fcad85320323",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/jsons/splash_cherry.json": "40aef7242cafb5670797227461dd08ea",
"assets/assets/jsons/kyc/educational_qualification_prod.json": "4d5dc40e8360c84e3fd681712a05ab06",
"assets/assets/jsons/kyc/relationship.json": "15bb2c412fd601cd06e5d213056e7473",
"assets/assets/jsons/kyc/guardian_relationship.json": "4e55a06d660d6d12ceb33eabba533422",
"assets/assets/jsons/kyc/wealth_source.json": "d05aebb5a016e9fd4414aa5d1782148d",
"assets/assets/jsons/kyc/wealth_source_prod.json": "1a125af5882bb5cb4573e929a8be88ca",
"assets/assets/jsons/kyc/relationship_prod.json": "14ddb8c202e5116e79ee67047f91024c",
"assets/assets/jsons/kyc/educational_qualification.json": "d92276a134072f91c532901e87f7a413",
"assets/assets/jsons/kyc/gross_income_range_prod.json": "95677e772491d3505ab26affae6a9379",
"assets/assets/jsons/kyc/occupation_prod.json": "ebfc73c4b853ed409958c1b8b0b6b887",
"assets/assets/jsons/kyc/occupation.json": "0162b1b3e5dc5087bada030689dc3c1e",
"assets/assets/jsons/kyc/guardian_relationship_prod.json": "3ef6ae30850540ec6ad51c9473f19038",
"assets/assets/jsons/kyc/gross_income_range.json": "0ca0e503157ce75fb539dcda5e1ebd17",
"assets/assets/jsons/splash.json": "ba03007c760c780619eefdbf5b788e78",
"assets/assets/images/serviceProvider-52.png": "e60b466f2a5e841ffc7f3c56918f5052",
"assets/assets/images/serviceProvider-9.png": "0904dcf1d55a4889fdadc446d79a7357",
"assets/assets/images/serviceProvider-45.png": "e6215fe195920ab72bae8e9554c52bae",
"assets/assets/images/serviceProvider-51.png": "41ab7be77a3920650ff7a88d0c5332c8",
"assets/assets/images/google_icon.png": "8ce3c93f0ab76803c0e00435173f21b7",
"assets/assets/images/serviceProvider-40.png": "ffa7037f7c8078747d757ccd49994c4b",
"assets/assets/images/selfie_img.png": "dfef1f29780218bd476b6c85b5e5488c",
"assets/assets/images/icon_aadhar.png": "fd71648447d9240acbf62b999f270342",
"assets/assets/images/serviceProvider-42.png": "5f275219616f2199eefcee302f361c7a",
"assets/assets/images/edit_icon.png": "44db584ec50f8230a7214f0d58f840f2",
"assets/assets/images/2.0x/selfie_img.png": "886dccc1d36c989b8cb9aff56414fa7c",
"assets/assets/images/2.0x/icon_aadhar.png": "bcac63ee62fd704e3cfa0e4c5d59c903",
"assets/assets/images/2.0x/pursue-dreams.png": "3629916004896330f401fea5ba1df0d9",
"assets/assets/images/2.0x/failed_id_illustration.png": "e1b376303eb61556b3dce84b0655fa56",
"assets/assets/images/2.0x/img_format.png": "3487732db2b4ad68a77ead3b7b7d8b26",
"assets/assets/images/2.0x/icon_verified.png": "fb59936ea153df2216db54132e9b872e",
"assets/assets/images/2.0x/bg_pattern.png": "ecb642db1c84284c60848d949a7713fa",
"assets/assets/images/2.0x/icon_google.png": "fd06b5ee75c7ed485ede768ff3f6f4f8",
"assets/assets/images/2.0x/puzzled_lock.png": "6047480918c2cb57d35a706fc4cc58b3",
"assets/assets/images/2.0x/safe_secure.png": "d8e00d4e5e59e044e7aec914015484ce",
"assets/assets/images/2.0x/know-where-to-invest.png": "ee377d10f2370982dd63d1b4a06df32c",
"assets/assets/images/2.0x/commission_free_mutual_funds.png": "272ebebddd89209a6a68ffd933ccb483",
"assets/assets/images/2.0x/img_something_went_wrong.png": "7464c8e7b4c2ee077ce04a80c9576689",
"assets/assets/images/2.0x/email_black_24dp.png": "97e3b90d182bf7510f48cc7fd565e0dc",
"assets/assets/images/2.0x/iso_certified.png": "3620afc4d26d0649d0c4914a41b23abf",
"assets/assets/images/2.0x/google.png": "324ba0b19ca16715182dbbc3e5f67ab1",
"assets/assets/images/2.0x/pan-card-2.png": "05f4c859cf7bdc26eae62e396a79fdde",
"assets/assets/images/2.0x/img_success.png": "f8d3338f8b8169d563d56ef0031cf6f4",
"assets/assets/images/2.0x/ico_close.png": "9824000b844273f7dbf1cd1acec7b295",
"assets/assets/images/2.0x/smart_dashboards.png": "4db84d2a2aca1e951923407221561023",
"assets/assets/images/ref_imag.png": "bdd662d098332a35fca988ed707e0301",
"assets/assets/images/delete_icon.png": "e0e72ec263b5c498471a0ff7e4e96446",
"assets/assets/images/serviceProvider-18.png": "640d49329493dd0dbafaa9e16443b246",
"assets/assets/images/serviceProvider-31.png": "60e7f7f68318e7c7fefb35837fb159da",
"assets/assets/images/pursue-dreams.png": "36233c1df5a89d4d0cd75b8a251d50cc",
"assets/assets/images/failed_id_illustration.png": "da180fce327591982f1b797f10ae66ec",
"assets/assets/images/img_format.png": "a8d63c270cf04564a4c53e4f4ec0b3c6",
"assets/assets/images/serviceProvider-33.png": "04aa04118090ecb44887d2ada5d1dd71",
"assets/assets/images/serviceProvider-27.png": "5b089da95035bfe90a4848e6d72b2bcf",
"assets/assets/images/serviceProvider-26.png": "c345c75e7d8318a91ab4dba425799df8",
"assets/assets/images/icon_verified.png": "a2aeb35d79aac33b1e1fbe2145adbfd8",
"assets/assets/images/mutualfund_img.png": "0621b9f2e7c99b8c6771c435f9d6d8e2",
"assets/assets/images/serviceProvider-36.png": "31af3570d06ef4b5cab8bb8f482a49fb",
"assets/assets/images/serviceProvider-37.png": "20d1bf65cc7ad79b1583ffb1b9e5955e",
"assets/assets/images/bg_pattern.png": "6816a92e329ee82abc7e54e8210f80f8",
"assets/assets/images/serviceProvider-21.png": "fed99b14f21fa4ad9cb6cd0f38765a61",
"assets/assets/images/serviceProvider-34.png": "261e8e102c908684b02a5ac99b09b0f8",
"assets/assets/images/serviceProvider-20.png": "fe149fd322b6e19ff238d0b3116edd49",
"assets/assets/images/icon_shield.png": "ce26a4687ee725ddd71761d5c403a6be",
"assets/assets/images/video_thumbnail.png": "d1922f49378d15d0f802b05bff238d0a",
"assets/assets/images/pancard.png": "488aa1d1c23a584d6859be2d65029ad4",
"assets/assets/images/icon_google.png": "8ce3c93f0ab76803c0e00435173f21b7",
"assets/assets/images/serviceProvider-10.png": "1056ee4276a81e662ce095b6e9c3ed97",
"assets/assets/images/img_failure.png": "79a66630cb7aaedaae6421bb44bb7a74",
"assets/assets/images/portfolio.png": "28269f225d8fc3bc75f2a10232ef7d21",
"assets/assets/images/cup.png": "811d7ae03750f22f8b9cb5ab8e85320e",
"assets/assets/images/tax.png": "59e313291a79efffcfc2b270e8a8118d",
"assets/assets/images/empty_cart_mutual_fund.png": "a78c97c80af3eca003974e508710d5ce",
"assets/assets/images/category1.png": "e68e44296365adf4dfa280177a8c8629",
"assets/assets/images/globe.png": "26170251ae628eca5d4abb42f5bd077a",
"assets/assets/images/serviceProvider-17.png": "b37967f20174651e05d591b32f84d376",
"assets/assets/images/puzzled_lock.png": "c04393af05c87c3884e1788992bb1e9c",
"assets/assets/images/signaturesample.png": "b5c6b7e4186070cfeb8711d4973cdd33",
"assets/assets/images/safe_secure.png": "f53cb9d9c71a84043eed8741d1ce771e",
"assets/assets/images/category2.png": "b77446e09b268d5af28b17c89ac72e61",
"assets/assets/images/know-where-to-invest.png": "20325990d5530e536f800e06139f83d9",
"assets/assets/images/serviceProvider-14.png": "d907f01dd37f73f00db3f06300624a14",
"assets/assets/images/serviceProvider-28.png": "1541823b35726678182c9083257d7afa",
"assets/assets/images/serviceProvider-29.png": "671a54d136b74a5c615391428bd5d5f9",
"assets/assets/images/serviceProvider-15.png": "64f7ecf8fb2bde388195240a865d7fdf",
"assets/assets/images/category3.png": "a2fddbf3a58f6fee93ef979ae0983f22",
"assets/assets/images/serviceProvider-3.png": "967d8b0a0d1c7e0a4e99e295eb01bf00",
"assets/assets/images/commission_free_mutual_funds.png": "0621b9f2e7c99b8c6771c435f9d6d8e2",
"assets/assets/images/img_something_went_wrong.png": "6729ed38bca28c577b576aacf3ba2cdb",
"assets/assets/images/serviceProvider-65.png": "41ab7be77a3920650ff7a88d0c5332c8",
"assets/assets/images/email_black_24dp.png": "f6ce25eadd7c7d7acff57d73edf90a4d",
"assets/assets/images/iso_certified.png": "f7344d10d9d043b46655cc0385548acf",
"assets/assets/images/serviceProvider-1.png": "c10cd7ad551f5996f2cb24c58c10ee00",
"assets/assets/images/google.png": "722710b1048b1104ee12cb46e5e19301",
"assets/assets/images/pan-card-2.png": "3f0baf94149f904113ed6cd2d7d14096",
"assets/assets/images/img_success.png": "2b342dc803979ca47a7c6ed6e14b2d9d",
"assets/assets/images/box.png": "e1f598657e1596d8f1aec5b21f904bfb",
"assets/assets/images/icon_highlight_off.png": "da287be783c53c426bcef2e01ca9f891",
"assets/assets/images/icon_check_circle.png": "aa9102c752f40a04036cd59914cebb2f",
"assets/assets/images/ico_close.png": "7f7e609c319a3f3d9739dfc77d9fe84e",
"assets/assets/images/smart_dashboards.png": "28269f225d8fc3bc75f2a10232ef7d21",
"assets/assets/svgs/icon_shield.svg": "a484d038fb9932ff71eba9b93162e7d5",
"assets/assets/svgs/play_circle.svg": "9c4309fc1e94cf87d3870914f8033a0f",
"assets/assets/svgs/outline-live_help-24px.svg": "737c38ef451cf2c8a520c81fedccbb44",
"assets/assets/svgs/ico_arrow.svg": "83513b22e3f109a9e97b043ede0b9b29",
"assets/assets/svgs/ico_warning.svg": "aaa9f3a3034aef73df8b7e626cbef4b1",
"assets/assets/svgs/carddesign.svg": "5fd6693dea707c134b1fa4d7ce323ee9",
"assets/assets/svgs/biometric_type_fingerprint.svg": "1531df3feb93663d6852cc521b983556",
"assets/assets/svgs/background_with_shapes.svg": "eca88c8ca5076c992bd33d81068600f2",
"assets/assets/svgs/draw_signature.svg": "c98afe5ed08617ce8f9805c982c07dbc",
"assets/assets/svgs/cart.svg": "c314a22106a9aaebd764086cbd7b1202",
"assets/assets/svgs/time.svg": "7219846aa9908699b86d2742851c8b5a",
"assets/assets/svgs/drop-down-button.svg": "1f7a54a2d7876ddcf7b1fa2aae24effd",
"assets/assets/svgs/biometric_type_background.svg": "35c91c1e5bea95099dd3def12ca9d0ab",
"assets/assets/svgs/icon_help_round.svg": "d936e6699284284a08a24211ec96a0cd",
"assets/assets/svgs/ico_success.svg": "68a7e6a56bea18fe1253ea8e4826d690",
"assets/assets/svgs/dashed_line.svg": "94f1e21d5b962805dd4ee4fca3eca5af",
"assets/assets/svgs/down_icon.svg": "7576aad1d1042261f2a1e8046dae1924",
"assets/assets/svgs/icon_redirect.svg": "e69f07be5601d81d21d7b5c74df18767",
"assets/assets/svgs/icon_info.svg": "6a7138f4af769ac669811461715f59bd",
"assets/assets/svgs/biometric_type_face_id.svg": "0ebf8fca6b84ad812f8e58fcfdec92e0",
"assets/assets/svgs/cherry_logo.svg": "03e8620d61e8adeeff8d1c906da5e5d3",
"assets/assets/svgs/white_right_arrow.svg": "db1078402fdab3b01440e4cab687d486",
"assets/assets/svgs/drop-up-button.svg": "f7829a81acf61c132739cee2484072a8",
"assets/assets/svgs/Exploreicon.svg": "e86bf7962093039203ff4d56243bcd66",
"assets/assets/svgs/Group%2520155776.svg": "b3a9f190fc82d69bb11571cda67df1dd",
"assets/assets/svgs/search-24px.svg": "8a2bfa7032f933c00e64b73cc55b2494",
"assets/assets/svgs/carddesign1.svg": "913d7ad3c06e6cab06704e11ee2814e1",
"assets/assets/svgs/ico_error.svg": "ee684c3f88c9ad66d1c39e53bd8de444",
"assets/assets/svgs/carddesign2.svg": "8674e6e2908e45020ef1b1ae5c1363b9",
"assets/assets/envs/prod.env": "8c406207f7b7ad2bcd1b51a12eb1c893",
"assets/assets/envs/uat.env": "18d6cdd31066dce6fd6694a50bff8935",
"assets/assets/translations/en.json": "c3d5066ed97312bee29057744c9df07d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
