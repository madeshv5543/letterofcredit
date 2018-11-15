<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>New Order</strong>
          </div>
          <b-form>
            <b-form-group label="Select Seller" label-for="basicSelectLg" :label-cols="3" :horizontal="true">
              <b-form-select id="basicSelectLg" size="lg" :plain="true" :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                value="Please select">
              </b-form-select>
            </b-form-group>
            <div>
              <b-card title="Seller Details" class="mb-2">
                <p class="card-text">
                  name: seller name,

                </p>
                <b-button href="#" variant="primary">Add Item</b-button>
              </b-card>
            </div>
          </b-form>
            <b-row>
                <b-col md="3">
                </b-col>
                <b-col md="6">
                <b-card>
                    <div slot="header">
                        Add Items
                    </div>
                <b-form  @submit.prevent="addItem(item)" novalidate>
                    <b-form-group label="Product Name" label-for="product" :label-cols="5" :horizontal="true">
                        <b-form-input id="product" name="product" v-model="item.product" type="text" placeholder="Product name"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Unit Price" label-for="unitprice" :label-cols="5" :horizontal="true">
                        <b-form-input id="unitprice" name="unitprice" v-model="item.unitprice" type="text" placeholder="Unit Price"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Quantity" label-for="quantity" :label-cols="5" :horizontal="true">
                        <b-form-input id="quantity" name="quantity" v-model="item.quantity" type="text" placeholder="Quantity"></b-form-input>
                    </b-form-group>
                    <div slot="footer">
                        <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Add</b-button>
                        <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
                    </div>
                </b-form>
                </b-card>
                </b-col>
            </b-row>
          <b-row>

            <b-col lg="12">
              <c-table :table-data="items" :fields="fields" caption="<i class='fa fa-align-justify'></i> Purchase Orders"></c-table>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import cTable from '../base/Table.vue'
  export default {
    name: 'order',
    components: {
      cTable
    },
    data() {
      return {
        selected: [],
        item: {}, // Must be an array reference!
        show: true,
        items: [],
        itemsArray: [],
        fields: [{
            key: 'product',
            label: 'Product',
            sortable: true
          },
          {
            key: 'unitprice',
            labe: 'Unit Price'
          },
          {
            key: 'quantity',
            label: 'Quantity'
          },
          {
            key: 'total',
            label: 'Total'
          }
        ],
      }
    },
    methods: {
      click() {
        // do nothing
      },
      addItem(item) {
        console.log("item",item)
        item.total = parseFloat(item.quantity) * parseFloat(item.unitprice);
        this.itemsArray.push(item);
      }
    }
  }

</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
