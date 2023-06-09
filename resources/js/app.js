import './bootstrap';
import '~resources/scss/app.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

.card {
  border: 1px solid $gray-300;
  border-radius: $border-radius;
  padding: 20px;
  margin-bottom: 20px;

  .card-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .card-text {
    font-size: 18px;
    color: $gray-600;
    margin-bottom: 15px;
  }

  .btn-primary {
    background-color: $primary;
    border-color: $primary;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
      background-color: darken($primary, 10%);
      border-color: darken($primary, 10%);
    }
  }
}
