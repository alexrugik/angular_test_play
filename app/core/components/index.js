import AppHeaderComponent from './header/header.component';
import AppFooterComponent from './footer/footer.component';
import ImageList from './images/images.component';

export default angular.module('app.core.components', [
    AppHeaderComponent,
    AppFooterComponent,
    ImageList
])
    .name;