<template>
  <div>
    <h4 class="text-center py-2">List Makanan</h4>

    <div class="card shadow">
      <div class="card-body">
        <div class="d-md-flex justify-content-md-end">
          <router-link to="/crud/tambah" class="btn btn-primary">Tambah</router-link>
        </div>

        <div class="table-responsive">
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama Makanan</th>
                <th scope="col">Daerah Asal</th>
                <th scope="col">Nama Lain</th>
                <th scope="col">Gambar</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(makanan, index) in makanan" :key="makanan.key">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ makanan.nama }}</td>
                <td>{{ makanan.daerah }}</td>
                <td>{{ makanan.lain }}</td>
                <td><img v-bind:src="makanan.img" style="width: 70px;" class="rounded" alt="photo is loading" /></td>
                <td>
                  <!-- edit -->
                  <router-link
                    :to="{ name: 'CrudUbah', params: { id: makanan.key } }"
                    ><b-icon icon="pencil-fill"></b-icon
                  ></router-link>
                  |
                  <!-- hapus -->
                  <b-icon
                    class="text-danger"
                    @click.prevent="HapusFood(makanan.key)"
                    icon="trash-fill"
                  ></b-icon>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
  },
};
</script>