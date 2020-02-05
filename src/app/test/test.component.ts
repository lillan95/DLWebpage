import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSort, MatTableDataSource} from '@angular/material';


import { Memo } from '../memo';
import { MEMOS } from '../mock-memos';
import { MemoService } from '../memo.service';

const dataBase: any = {
  bugs: {
    bz1234: {
      id: 2121,
      importance: 'P5',
      milestone: 8.2,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."
    },
    bz11234: {
      id: 19085,
      importance: 'P2',
      milestone: 8.3,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."
    },
    bz12354: {
      id: 35468,
      importance: 'P3',
      milestone: 8.4,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."
    },
    
    bz14354: {
      id: 35468,
      importance: 'P3',
      milestone: 8.4,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."
    },
    
    bz12254: {
      id: 35468,
      importance: 'P3',
      milestone: 8.4,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."
    }
  }
};


export interface DataElement {
  id: number,
  importance: string,
  milestone: number,
  desc: string
}

const dataBase2: DataElement[] = [
  { id: 2121, importance: 'P5', milestone: 8.2, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."},
  { id: 19085, importance: 'P2', milestone: 8.3, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."},
  { id: 35468, importance: 'P3', milestone: 8.4, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."},
  { id: 35468,  importance: 'P3',   milestone: 8.4,  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."},
  { id: 35468, importance: 'P3', milestone: 8.4, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada a augue quis eleifend. Maecenas nibh urna, commodo quis velit ut, posuere molestie diam. Mauris urna arcu, convallis eu tellus vel, tempor convallis augue. Integer enim dolor, efficitur in vestibulum sit amet, aliquet at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate sit amet eros quis finibus. Nam consequat gravida mauris nec tristique. Fusce non nibh nec tortor sagittis cursus vel in turpis. Etiam quis sollicitudin ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque bibendum libero, et suscipit justo vulputate a. Pellentesque condimentum vel dolor at egestas.     Sed orci est, consequat ac ante quis, auctor porta lectus. Nullam ut tincidunt lacus. Vivamus eget sapien mauris. Curabitur urna massa, sagittis quis accumsan et, semper interdum tellus. Quisque sodales lectus et tellus malesuada consequat. Integer ullamcorper justo ac erat lobortis fringilla. Pellentesque posuere bibendum nisl non lobortis. Sed pharetra tincidunt sapien, sit amet tempor erat vulputate et. Suspendisse et feugiat dui. Aliquam interdum ligula a massa volutpat venenatis. Nam ut sem turpis. Morbi porttitor erat rhoncus felis luctus semper. In hac habitasse platea dictumst. Fusce in metus porta, finibus elit a, mattis ipsum. Pellentesque eu mauris id metus pulvinar maximus. Mauris mattis tempus vulputate. Aliquam odio metus, facilisis non pellentesque nec, posuere et nunc. Praesent posuere mi vitae dolor feugiat maximus. Aliquam nec metus imperdiet est pellentesque lobortis ac ut odio. Vestibulum euismod, leo nec tempor bibendum, orci lacus fringilla ipsum, venenatis tincidunt lorem mauris sed ante. Donec at enim ipsum. Sed condimentum quam sit amet dignissim sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ullamcorper suscipit cursus. Nullam vitae odio mi. Sed ultricies, lorem in consequat convallis, urna ex cursus velit, a facilisis nunc ante et justo. Sed urna mauris, lacinia id felis tincidunt, consequat bibendum neque. Nulla elementum leo felis, convallis pulvinar dui luctus in. In at volutpat metus. Morbi dignissim velit a nulla sagittis, in laoreet neque cursus. Vestibulum egestas enim at arcu interdum, id vulputate magna lobortis. Vivamus id ligula risus. In sit amet facilisis sem. Nunc id elementum erat, ut bibendum massa. Duis faucibus hendrerit enim, id porta tellus molestie vel. Duis laoreet dapibus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur fringilla erat nec justo pharetra, et accumsan tortor lacinia. Praesent dictum, lorem eget placerat fermentum, tellus metus auctor odio, et accumsan purus ex nec tortor. Aenean in metus vel orci maximus cursus id sed lectus."}
];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})


export class TestComponent implements OnInit {
  
  public bugsQueue = 10;

  value = 'Click to change names here. It will scroll if too long.';
  

  show: boolean = false;
  constructor() { }

  objectKeys = Object.keys;
  something = dataBase['bugs'];

  
  datas = ['1254', '1234', '6533', '3464', '3453','2347', '6746'];

  onEnter(value: string) { 
    this.value = value; 
  }
  /*
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(dataBase2);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }*/


  displayedColumns: string[] = ['id', 'importance', 'milestone' , 'desc']; //, 'desc'
  onlyColumns: string[] = ['id'];
  dataSource = new MatTableDataSource(dataBase2);

  onedataSource = new MatTableDataSource(dataBase2);
  
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}

export class MemoboxComponent {
  memos = ['1', '2', '3', '4'];
  something = dataBase;
  //memos: Memo[] = [];
  addMemo(newMemo: string) {
    console.log("add new memo and something in database is: ", this.something )
    if (newMemo) {
      this.memos.push(newMemo);
    }
  }
  constructor() { }
}


/*
export class TableExpandableRowsExample {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }
];*/