export interface Location {
  id: string;
  title: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  images: string[];
}

export const locations: Record<string, Location> = {
  miami: {
    id: "miami",
    title: "Dolphin Mall, Miami",
    address: "11401 NW 12th St, Miami, FL 33172",
    coordinates: {
      lat: 25.787757873535156,
      lng: -80.38060760498047,
    },
    description: "Visit our store at Dolphin Mall in Miami! Experience the magic of Whizbangs where innovation meets indulgence. Our Miami location offers international candies from Japan, Germany, and Korea you won't find anywhere else. We offer over 70 flavors of Mix & Match - so don't hesitate to make your own bag of your favorite sweets. Our handmade fudge is world-class and easily our favorite candy in the store. And if you still need a present, rest assured: we have a wide selection of plushies, Squishables, and other small toys. Come explore our colorful world of sweets and discover your new favorite treat.",
    images: [
      "/candy-crafted-move/src/assets/miami-1.jpg",
      "/candy-crafted-move/src/assets/miami-2.jpg",
      "/candy-crafted-move/src/assets/miami-3.jpg",
      "/candy-crafted-move/src/assets/miami-4.jpg",
      "/candy-crafted-move/src/assets/miami-5.jpg",
    ],
  },
  burlington: {
    id: "burlington",
    title: "Burlington, Vermont",
    address: "Church Street, Burlington, VT 05401",
    coordinates: {
      lat: 44.4759,
      lng: -73.2121,
    },
    description: "Discover sweet delights in the heart of Burlington! Located on the charming Church Street Open Air Mall, our Vermont location brings Whizbangs' unique candy experience to the Green Mountain State. Enjoy our handcrafted confections in a cozy, welcoming atmosphere perfect for families and candy lovers of all ages. And if you are lucky, you can even see how our candy is made, live and in technicolor.  ",
    images: [
      "/candy-crafted-move/src/assets/burlington-1.jpg",
      "/candy-crafted-move/src/assets/burlington-2.jpg",
      "/candy-crafted-move/src/assets/burlington-3.jpg",
      "/candy-crafted-move/src/assets/burlington-4.jpg",
      "/candy-crafted-move/src/assets/burlington-5.jpg",
    ],
  },
};

export const getLocationById = (id: string): Location | undefined => {
  return locations[id];
};
