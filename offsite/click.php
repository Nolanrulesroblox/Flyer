<?php $path = __DIR__ .'/click';$content = file_get_contents($path);if ($content===FALSE){die("Fail: file $path not found.\n");};$value = intval($content);$value++;$result = file_put_contents($path,$value);?>