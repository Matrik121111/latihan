<template>
  <div>
    <div v-for="makanan in makanan" :key="makanan.key">
      <div class="card shadow mb-3">
        <div class="card-body">
          <div class="row g-0 bg-light position-relative">
            <div class="col-md-6 mb-md-0 p-md-4">
              <img v-bind:src="makanan.img" class="w-100" alt="" />
            </div>
            <div class="col-md-6 p-4 ps-md-0">
              <h5 class="mt-0">{{ makanan.nama }}</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                labore cupiditate iure asperiores expedita molestias quasi,
                harum nulla corrupti doloribus in eaque quam alias facilis
                deleniti ea fugiat voluptatibus quo!
              </p>
              <a href="#" class="stretched-link">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <InfiniteLoading @infinite="infiniteHandler"></InfiniteLoading>
  </div>
</template>

<script>
import { db } from "@/firebase";
export default {
  data() {
    return {
      makanan: [],
    };
  },
  created() {
    db.collection("makanans").onSnapshot((snapshotChange) => {
      this.makanan = [];
      snapshotChange.forEach((doc) => {
        this.makanan.push({
          key: doc.id,
          nama: doc.data().nama,
          daerah: doc.data().daerah,
          lain: doc.data().lain,
          img: doc.data().img,
        });
      });
    });
  },
  methods: {
    HapusFood(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("makanans")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },

    //infinite scroll
    async fetchfood() {
      let foodRef = db.collection("makanans").limit(5);
      if (this.lastDocSnapshot) {
        foodRef = foodRef.startAfter(this.lastDocSnapshot);
      }
      const foodSnap = await foodRef.get();
      this.lastDocSnapshot = foodSnap.docs[foodSnap.docs.length - 1];
      const result = foodSnap.docs.map((p) => p.data());
      this.makanan.push(...result);
      return result.length;
    },
    async infiniteHandler($state) {
      const newfoodCount = await this.fetchfood();
      if (newfoodCount > 0) {
        return $state.loaded(); // More makanan to come
      }
      return $state.complete(); // Done with the makanan
    },
  },
};
</script>